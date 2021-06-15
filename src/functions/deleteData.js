//separate these functions in a way gives u the ability to call them from different components later when project expands

const deleteData = (data, setData, item) => {
  setData(
    data.filter((k) => {
      return k !== item;
    })
  );
};

export default deleteData;
