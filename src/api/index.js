
import {Requset} from "../runtime/axios";
/*
* *获取抽奖活动信息
* */


/**使用方法说明接口*/

export const gokLottery = (data)=>{
    return Requset({
        url:'/store/gokLottery',
        method:'GET',
        data:data
    })
}

