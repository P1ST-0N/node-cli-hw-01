export default function controllerDecoration(controller) {
  return async (req, res, next) => {
    try {
      await controller();
    } catch (error) {
      next(error);
    }
  };
}
