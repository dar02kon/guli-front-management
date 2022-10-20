import request from '@/utils/request'


export default {
  //讲师列表（条件查询分页）
  //current 当前页,limit 每页记录数,teacherQuery 条件对象
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      //teacherQuery条件对象，后端requestBody获取数据
      //data表示把对象转换成json传递
      data: teacherQuery
    })
  },
  //删除讲师
  deleteTeacherId(id) {
    return request({
      url: `/eduservice/teacher/${id}`,
      method: 'delete'
    })
  },
  //添加讲师
  addTeacher(teacher) {
    return request({
      url: `/eduservice/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  //根据id查询讲师
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacher/getTeacher/${id}`,
      method: 'get'
    })
  },
  //修改讲师
  updateTeacherInfo(teacher) {
    return request({
      url: `/eduservice/teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  },
  //查询所有讲师
  getListTeacher() {
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get'
    })
  },

}
