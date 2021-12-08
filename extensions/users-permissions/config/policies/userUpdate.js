module.exports = async (ctx, next) => {
  // if the user is an administrator we allow them to perform this action unrestricted
  if (ctx.state.user.role.name === "Authenticated") {
    return next();
  }

  const { id: currentId } = ctx.state.user;

  const userToUpdate = Number.parseInt(ctx.params.id, 10);

  if (currentId !== userToUpdate) {
    return ctx.unauthorized("Unable to edit user");
  }

  // Extract the fields regular users should be able to edit
  const { displayName } = ctx.request.body;

  // Provide custom validation policy here
  if (displayName && displayName.trim() == "") {
    return ctx.badRequest("Display name is required");
  }

  // setup the update object
  const updateData = {
    displayName,
  };

  // remove properties from the update object that are undefined (not submitted by the user in the PUT request)
  Object.keys(updateData).forEach(
    (key) => updateData[key] === undefined && delete updateData[key]
  );
  if (Object.keys(updateData).length === 0) {
    return ctx.badRequest("No data submitted");
  }

  ctx.request.body = updateData;
  return next();
};
