//separate these functions in a way gives u the ability to call them from different components later when project expands

const addData = (data, setData, insert) => {
  let pr = new Promise((resolve, reject) => {
    let q = data.filter((item) => {
      return item.roll === insert.roll;
    });
    // alert(q) unneccesary alert use console.log() while checking
    if (q.length === 0) {
      resolve("Yes Available");
    } else {
      reject("already taken");
    }
  });

  pr.then((message) => {
    let m = {
      name: insert.name,
      addr: insert.addr,
      phone: insert.phone,
      roll: insert.roll,
    };
    setData([...data, m]);
    alert(message + m.roll);
  }).catch((message) => {
    alert(message);
  });
};

export default addData;
