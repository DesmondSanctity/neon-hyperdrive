const paginate = (Model, options) => {
    const page = options.page || 1
    const perPage = options.perPage || 20
    const where = options.where || {}
    const include = options.include || []
    const order = options.order || []
    const attributes = options.attributes || {}
    
    const offset = (page - 1) * perPage
    
    const paginateOptions = {
      where,
      include,
      limit: perPage,
      offset,
      order,
      attributes
    }
    
    return Model.findAndCountAll(paginateOptions)
    .then(result => {
      const pageCount = Math.ceil(result.count / perPage)
      return {
        rows: result.rows,
        total: result.count,
        page,
        perPage,
        pageCount
      }
    })
  }
  
  export const getPagination = async (Model, options) => {
    return paginate(Model, options).then(paginateResult => {
      const totalPages = paginateResult.pageCount
      const currentPage = paginateResult.page
      const hasNextPage = currentPage < totalPages
      const hasPrevPage = currentPage > 1
      
      return {
        ...paginateResult,
        hasNextPage,
        hasPrevPage
      }
    })
  }