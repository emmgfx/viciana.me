import { Intro } from "@/components/Intro";
import { SocialLinks } from "@/components/SocialLinks";
import Image from "next/image";

export default async function AboutMe({ params }) {
  return (
    <>
      <Intro title="About me" />
      <div className="grid md:grid-cols-[7fr_3fr] gap-8">
        <div className="order-2 md:order-1">
          <Description />
        </div>
        <div className="md:order-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

const Description = () => {
  return (
    <div className="space-y-8 text-slate-400">
      <p>
        Soy Josep Viciana, desarrollador Web y Android en{" "}
        <span className="line-through">Barcelona</span> remoto. He colaborado en
        proyectos de empresas y organizaciones tanto minúsculas como de renombre
        internacional.
      </p>
      <p>
        Ocupo mi tiempo en... Principalmente el trabajo y la familia, como
        cualquiera. Mi tiempo libre escasea pero con él estoy intentando
        reflotar este blog. Si me sobra un poco leo o juego. Si leo suele ser
        Stephen King ensayo político, o cuentos a mi hija. Si juego es a{" "}
        <span className="line-through">Xbox</span>{" "}
        <span className="line-through" title="Ouch... 😅">
          Stadia*
        </span>{" "}
        PS5.
      </p>
      <p>
        Programo / escribo en... Fullstack con tendencia al frontend. El backend
        con PHP y el frontend con React, aunque he hecho cosas interesantes con
        Angular. Maqueto con SCSS y según el caso incluyo Bootstrap. Me gusta
        WordPress, he hecho varias plantillas opensource. Ultimamente estoy
        trasteando bastante serverless, principalmente Firebase. Cuando estaba
        más de moda usaba bastante jQuery, también hice algunos plugins
        opensource.
      </p>
      <p>
        Me encanta Android. Me gusta como usuario y como desarrollador. Aprendí
        Java con él y más tarde Kotlin. Aunque me gustaría hacer más cosas, el
        grueso de mi trabajo no está aquí. He estudiado sobre Android en la
        Universidad Camilo José Cela y en The Akademy de Antonio Leiva
        (seguidile, su contenido vale oro).
      </p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="grid grid-cols-[30fr_60fr] items-center gap-4 md:flex md:flex-col md:items-start">
      <div className="shrink">
        <Image
          src="/avatar.jpeg"
          alt="Josep Viciana"
          width="460"
          height="460"
          className="rounded-2xl rotate-2 w-full max-w-xs mx-auto"
        />
      </div>
      <SocialLinks className="flex-col shrink-0" withTitles />
    </div>
  );
};
