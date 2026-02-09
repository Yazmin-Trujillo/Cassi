export const RankingDeEstrellas = (valor: number) => {
  //ToDo: hacer reactivo del 0-5
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <i className="pi pi-star-fill text-yellow-400"></i>
        <i className="pi pi-star-fill text-yellow-400"></i>
        <i className="pi pi-star-fill text-yellow-400"></i>
        <i className="pi pi-star-fill text-yellow-400"></i>
        <i className="pi pi-star-fill text-yellow-400"></i>
      </div>
      <span className="text-sm text-gray-500">{valor}</span>
    </div>
  );
};
