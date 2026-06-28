const linkClassName =
  "text-white/55 underline decoration-white/25 underline-offset-2 transition-opacity hover:text-white/80";

export const Intro = () => {
  return (
    <div className="flex w-full flex-col gap-4 text-left text-sm leading-normal text-white/80">
      <p>
        Currently building{" "}
        <a
          href="https://banto.tv"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Banto
        </a>{" "}
        to turn static content into live shared experiences.
      </p>

      <p>
        AI made content cheap to produce and attention difficult to earn.{" "}
        <a
          href="https://banto.tv"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Banto
        </a>
        &apos;s goal is to help people turn prompts, documents, and existing
        material into live sessions their audience can join, play, vote, and
        participate in.
      </p>

      <p>
        Prior, I studied finance and computer science at The University of Texas
        at Austin and worked on commercialization and software across climate
        finance, health-tech, and medical commerce.
      </p>

      <p>
        Connect with me on{" "}
        <a
          href="https://github.com/phamdoug22"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://x.com/DouglasDPham"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          X
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/douglaspham/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          LinkedIn
        </a>
        , or at{" "}
        <a href="mailto:phamdoug22@gmail.com" className={linkClassName}>
          phamdoug22 at gmail dot com
        </a>
        .
      </p>
    </div>
  );
};
