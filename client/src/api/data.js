import instance from './axios'


export const caveListRequest = () => instance.get('/caves')
export const caveRequest = (id) => instance.get(`/cave/${id}`)
export const createCaveRequest = (cave) => instance.post(`/cave`, cave)
export const updateCaveRequest = (id, cave) => instance.put(`/cave/${id}`, cave)
export const deleteCaveRequest = (id) => instance.delete(`/cave/${id}`)



export const groupListRequest = () => instance.get('/groups')
export const groupRequest = (id) => instance.get(`/group/${id}`)
export const createGroupRequest = (group) => instance.post(`/group`, group)
export const updateGroupRequest = (id, group) => instance.put(`/group/${id}`, group)
export const deleteGroupRequest = (id) => instance.delete(`/group/${id}`)



export const systemListRequest = () => instance.get('/systems')
export const systemRequest = (id) => instance.get(`/system/${id}`)
export const createSystemRequest = (system) => instance.post(`/system`, system)
export const updateSystemRequest = (id, system) => instance.put(`/system/${id}`, system)
export const deleteSystemRequest = (id) => instance.delete(`/system/${id}`)



