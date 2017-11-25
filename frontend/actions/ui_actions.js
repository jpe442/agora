export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_SIGNUP_MODAL = 'TOGGLE_SIGNUP_MODAL';
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const toggleSignUpModal = () => ({
  type: TOGGLE_SIGNUP_MODAL,
});
