const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"普通管理员","menuJump":"列表","tableName":"putongguanliyuan"}],"menu":"普通管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛类别","menuJump":"列表","tableName":"luntanleibie"}],"menu":"论坛类别管理"},{"child":[{"buttons":["查看","修改","删除","查看评论","审核"],"menu":"交流论坛","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"系统资讯","tableName":"news"},{"buttons":["查看","修改","删除"],"menu":"问题反馈","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"交流论坛列表","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论","新增","修改","删除"],"menu":"交流论坛","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"系统资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"交流论坛列表","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["审核","查看","查看评论"],"menu":"交流论坛","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"交流论坛列表","menuJump":"列表","tableName":"jiaoliuluntan"}],"menu":"交流论坛模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"普通管理员","tableName":"putongguanliyuan"}]
    }
}
export default menu;