import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";

export const useAppDispatch: () => AppDispatch = useDispatch; //react-redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
