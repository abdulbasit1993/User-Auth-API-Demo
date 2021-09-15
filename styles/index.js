import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputIcon: {
    marginTop: 15,
    position: 'absolute',
  },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    // backgroundColor: COLORS.primary,
    height: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default STYLES;
