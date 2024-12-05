import { authService } from "@/services/authService";

export const RedirectIfNotAuth = async (to, from, next) => {
    const isAuthenticated = await authService.getToken();
    if (!isAuthenticated && to.path !== '/login') {
      next('/login');
    } else if (isAuthenticated && to.path === '/login') {
      next('/');
    } else {
      document.title = to.meta.title;
      next();
    }
}