export const employeeGetAll = (employees) => {
    console.log('get all', employees);
    return {
        type: 'book/getAll',
        data: employees
    }
}