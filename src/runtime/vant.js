// 自动按需引入组件 (推荐)
import { Tabbar, TabbarItem, Button, Calendar, Cell, CellGroup, Tab, Tabs, List, Popup, Empty, Field,Grid,GridItem,PullRefresh} from 'vant'
let vantUIs = [Tabbar, TabbarItem, Button, Calendar, Cell, CellGroup, Tab, Tabs, List, Popup, Empty, Field,Grid,GridItem,PullRefresh]
export default {
    install (Vue) {
        vantUIs.forEach(vantUI => {
            Vue.component(vantUI.name, vantUI)
            // Vue.use(vantUI)    // 也可以使用 Vue.use()
        })
    }
}
