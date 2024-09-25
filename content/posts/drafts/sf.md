> [!NOTE]
> Look how `user_id` is used as an argument that is passed to the function

```sql {13,24} /user_id/
SELECT x.r2user as afinity_user, SUM(booster) as afinity
FROM(
  SELECT
    r2.id_user AS r2user,
    r1.rating AS r1rating,
    r2.rating AS r2rating,
    (r1.rating*r2.rating) as booster
  FROM ratings r1 INNER JOIN ratings r2 ON r1.id_game = r2.id_game
  WHERE
    r1.id_user <> r2.id_user AND
    r1.rating = r2.rating AND
    r1.id_game = r2.id_game AND
    r1.id_user = user_id
  UNION ALL
  SELECT
    r2.id_user AS r2user,
    r1.rating AS r1rating,
    r2.rating AS r2rating,
    (r2.rating-r1.rating) as booster
  FROM ratings r1 INNER JOIN ratings r2 ON r1.id_game = r2.id_game
  WHERE
    r1.id_user <> r2.id_user AND
    r1.id_game = r2.id_game AND
    r1.id_user = user_id
) AS x
GROUP BY x.r2user;
```

Pretty dense, I know, but that's near the core of the entire service.

Now that we know how to determine the affinity between users, let's apply it to retrieve game recommendations. Be patient, isn't easy at all and probably doesn't need a lot of effort to you unless you're truly interested in understanding and maybe reusing some idea.

```sql /id_user_input/
SELECT
  games.id,
  games.name,
  ROUND(AVG(coincidence * rating)) as intensity
FROM ratings
INNER JOIN (
  SELECT id_user, SUM(5-ABS(ratings.rating - MR.rating)) as coincidence
  FROM ratings
  INNER JOIN (SELECT id_game, rating FROM ratings WHERE id_user = id_user_input) MR
    ON MR.id_game = ratings.id_game
  INNER JOIN games
    ON games.id = ratings.id_game
  WHERE id_user <> id_user_input
  AND ratings.id_game IN (SELECT id_game FROM ratings WHERE id_user = id_user_input)
  GROUP BY id_user
  ORDER BY coincidence
) as user_affinity ON user_affinity.id_user = ratings.id_user
INNER JOIN games ON games.id = ratings.id_game
WHERE ratings.id_user <> id_user_input
AND ratings.id_game NOT IN (SELECT id_game FROM ratings WHERE id_user = id_user_input)
GROUP BY games.id
ORDER BY intensity DESC
```

Let's break it down:

- Lines 1 to 5, they're the columns that we're retrieving
- Lines 7 to 17, pretty similar to the previous query, it's retrieving a list of users and rating his affinity. For me the magic in this query is this part: `SUM(5-ABS(ratings.rating - MR.rating)) as coincidence`.
