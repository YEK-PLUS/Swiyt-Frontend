import { POPUP } from '../types';

export const addLoginPopup = () => {
  const a = {
    type: POPUP.login,
    payload: true,
  };
  return (a);
};

export const deleteLoginPopup = () => {
  const a = {
    type: POPUP.login,
    payload: false,
  };
  return (a);
};

export const addSingupPopup = () => {
  const a = {
    type: POPUP.singup,
    payload: true,
  };
  return (a);
};

export const deleteSingupPopup = () => {
  const a = {
    type: POPUP.singup,
    payload: false,
  };
  return (a);
};

export const addForgotPasswordPopup = () => {
  const a = {
    type: POPUP.forgotpassword,
    payload: true,
  };
  return (a);
};

export const deleteForgotPasswordPopup = () => {
  const a = {
    type: POPUP.forgotpassword,
    payload: false,
  };
  return (a);
};

export const addLessonPopup = () => {
  const a = {
    type: POPUP.lesson,
    payload: true,
  };
  return (a);
};

export const deleteLessonPopup = () => {
  const a = {
    type: POPUP.lesson,
    payload: false,
  };
  return (a);
};
