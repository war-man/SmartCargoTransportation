export const ApplicationName = 'SmartCargoTransportation';

export const QueryParameterNames = {
  ReturnUrl: 'returnUrl',
  Message: 'message'
};

export const ManageActions = {
    UserManage: 'Role',
    RoleManage: 'User',
};

const prefix = '/Admin';

export const ApplicationPaths = {
    UserManage: `${prefix}/${ManageActions.UserManage}`,
    RoleManage: `${prefix}/${ManageActions.RoleManage}`,
};
