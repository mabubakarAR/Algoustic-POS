// eslint-disable-next-line import/no-anonymous-default-export
export default {
  insert: async (title,buyingFrom,buyingPrice,status,date,phone,type,quantity,callback,failCallBack) => {
    try {
      const db = window.databaseObj.purchases;
      const projectInfo = {
        Title: title,
        BuyerFrom: buyingFrom,
        BuyingPrice: buyingPrice,
        BuyingDate: date,
        BuyingPhone: phone,
        Status: status,
        ProductType: type,
        ProductQuantity: quantity
      };
      await db.insert(projectInfo, (err, doc) => {
        if (doc) {
          return callback(doc);
        } 
        else
        {
          return failCallBack(err);
        }
      });
    }
    catch(err){
      console.log(err)
    }
  },

  // delete: async(projectId, callback, failCallBack) => {
  //   try {
  //     const db = window.databaseObj.projects;
  //     await db.remove({ _id: projectId }, {}, function (err, doc) {
  //       if(doc){
  //         return callback(doc);
  //       }
  //       else
  //       {
  //         return failCallBack(err);
  //       }
  //     });
  //   }
  //   catch(err){
  //     console.log(err)
  //   }  
  // }, 

  update: async(id,payment,to,price,status,date,phone,callback,failCallBack) => {
    try {
      const db = window.databaseObj.purchases;
      await db.update( {_id: id }, {$set: { PaymentType: payment, SellingTo: to, SellingPrice: price, Status: status, SellingDate: date, SellingPhone: phone }}, {}, function (err, numDoc) {
        if (numDoc == 1) {
          return callback(numDoc);
        } 
        else
        {
          return failCallBack(err);
        }
      });
    }
    catch(err){
      console.log(err)
    }  
  } 
  
  }
  