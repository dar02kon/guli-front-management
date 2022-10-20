import request from '@/utils/request'


const api_name = '/eduservice/course'

export default {
  //添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  //查询所有讲师
  getListTeacher() {
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get'
    })
  },

  getCourseInfoById(id) {
    return request({
      url: `${api_name}/course-info/${id}`,
      method: 'get'
    })
  },
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}/update-course-info/${courseInfo.id}`,
      method: 'put',
      data: courseInfo
    })
  },
  getCoursePublishInfoById(id) {
    return request({
      url: `${api_name}/course-publish-info/${id}`,
      method: 'get'
    })
  },
  publishCourse(id) {
    return request({
      url: `${api_name}/publish-course/${id}`,
      method: 'put'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //删除课程
  removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    }
}
