const { systemUUID } = require('./utils/constants')

exports.seed = async function (knex) {
  const havePermissions = await knex('roles')
    .then(data => {
      if (data && data.length > 0) {
        return true
      }
      return false
    })

  if (havePermissions) return false

  const rolePermissions = {
    system: [
      'USER_GET',
      'USER_CREATE',
      'USER_UPDATE',
      'USER_DELETE'
    ],
    administrator: [
      'USER_GET',
      'USER_CREATE',
      'USER_UPDATE',
      'USER_DELETE'
    ],
    default_user: [
    ]
  }

  const insertRoles = async () => {
    return await knex('roles').insert([
      { name: 'system', created_by: systemUUID() },
      { name: 'administrator', created_by: systemUUID() },
      { name: 'default_user', created_by: systemUUID() }
    ]).returning(['id', 'name'])
  }

  const insertPermissions = async () => {
    return await knex('permissions').insert([
      {
        code: 'USER_GET',
        description: 'Fetch Users data',
        created_by: systemUUID()
      },
      {
        code: 'USER_CREATE',
        description: 'Create new User',
        created_by: systemUUID()
      },
      {
        code: 'USER_UPDATE',
        description: 'Update User data',
        created_by: systemUUID()
      },
      {
        code: 'USER_DELETE',
        description: 'Update User data',
        created_by: systemUUID()
      }
    ]).returning(['id', 'code'])
  }

  const roles = await insertRoles()
  const permissions = await insertPermissions()

  let RolePermissionEntries = []

  roles.forEach(role => {
    const newPermissionEntries = rolePermissions[role.name].map(rolePermissions => ({
      role_id: role.id,
      permission_id: permissions.filter(permission => permission.code === rolePermissions)[0].id,
      created_by: systemUUID()
    }))
    RolePermissionEntries = [...RolePermissionEntries, ...newPermissionEntries]
  })

  return await knex('role_permissions')
    .insert(RolePermissionEntries)
}
