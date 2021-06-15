//separate these functions in a way gives u the ability to call them from different components later when project expands
const updateData = (data, setData, k) => {
    let m=data.findIndex((x)=>x.roll===k.roll)
    data[m]=k;
    setData([...data]);
}

export default updateData