const formatDate = (date: Date) => {
  date = new Date(date);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const formatLastDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} de ${month}`;
};

export { formatDate, formatLastDate };
