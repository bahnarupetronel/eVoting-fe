export const getFunctions = () => {
  return [
    {
      id: "1",
      name: "Function1",
      specialites: [
        {
          id: "1",
          name: "Speciality1",
        },
        {
          id: "2",
          name: "Speciality2",
        },
        {
          id: "3",
          name: "Speciality3",
        },
        {
          id: "4",
          name: "Speciality4",
        },
        {
          id: "5",
          name: "Speciality5",
        },
        {
          id: "6",
          name: "Speciality6",
        },
      ],
    },
    {
      id: "2",
      name: "Function2",
      specialites: [
        {
          id: "1",
          name: "Speciality1",
        },
        {
          id: "2",
          name: "Speciality2",
        },
        {
          id: "3",
          name: "Speciality3",
        },
        {
          id: "4",
          name: "Speciality4",
        },
      ],
    },
    {
      id: "3",
      name: "Function3",
      specialites: [
        {
          id: "1",
          name: "Speciality1",
        },
        {
          id: "2",
          name: "Speciality2",
        },
        {
          id: "3",
          name: "Speciality3",
        },
        {
          id: "4",
          name: "Speciality4",
        },
        {
          id: "5",
          name: "Speciality5",
        },
      ],
    },
  ];
};

export const getFunctionId = (name, functions) => {
  for (let func of functions) if (func.name === name) return func.id;
  return null;
};

export const getSpecialityId = (name, specialites) => {
  for (let speciality of specialites)
    if (speciality.name === name) return speciality.id;
  return null;
};
