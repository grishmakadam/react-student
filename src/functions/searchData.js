//separate these functions in a way gives u the ability to call them from different components later when project expands

const searchData = (data, search) => {
  return data.filter((item) => {
    return item.roll === search;
  });
};

export default searchData;
