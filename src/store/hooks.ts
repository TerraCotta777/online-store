import { AppSelector, DispatchFunc } from "./types";
import  { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: AppSelector = useSelector