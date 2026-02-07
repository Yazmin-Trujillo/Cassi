type Props = {
  imagenSrc: string;
  imagenAlt: string | null | undefined;
  likes: number;
  comentarios: number;
  reenvios: number;
};
export const FooterExperienciasCompartidas = ({
  imagenAlt,
  imagenSrc,
  likes,
  comentarios,
  reenvios,
}: Props) => {
  return (
    <>
      <div className="h-56 rounded-2xl overflow-hidden mb-3">
        <img
          className="w-full h-full object-cover"
          src={imagenSrc}
          alt={imagenAlt ?? "imagen"}
        />
      </div>
      <div className="flex items-center justify-between text-gray-600 text-sm">
        <button className="flex items-center gap-2">
          <i className="pi pi-heart-fill text-red-500"></i>
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2">
          <i className="pi pi-comment"></i>
          <span>{comentarios}</span>
        </button>
        <button className="flex items-center gap-2">
          <i data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-share"
              width="1rem"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="share"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
              ></path>
            </svg>
          </i>
          <span>{reenvios}</span>
        </button>
      </div>
    </>
  );
};
