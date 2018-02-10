export default {
  /**
  * 设置时间选择范围
  * */
  disabledStartDate(current, endTime){
    return current && current.valueOf() > Date.parse(new Date(endTime));
  },
  disabledEndDate(current, startTime){
    return current && current.valueOf() < Date.parse(new Date(startTime));
  },
  /**
  * 清除filterList中重复项
  * */
  checkFilter(filterList){
    let newObj = {};
    for (var i in filterList) {
      if (filterList[i]&&filterList[i]!=""&&filterList[i]!=null) {
        newObj[i] = filterList[i];
      }
    }
    return newObj;
  }
}
