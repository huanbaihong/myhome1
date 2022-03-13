/**
 * 因为初始值不一样，所以写成函数形式进行传递
 * 每个数据的请求api不同，所以在各个组件中增加fetchData()函数包装一下再请求
 * @param {*} defaultDataValue 存放数据的初始值
 * @returns 混合配制
 */
export default function(defaultDataValue = null){
    return {
        data(){
            return {
                isLoading: true,
                data: defaultDataValue,
            }
        },
        async created(){
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}