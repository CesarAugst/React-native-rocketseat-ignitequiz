import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
    Path,
    Canvas,
    Skia,
    useValue,
    runTiming,
    BlurMask,
    Circle,
    Easing
} from '@shopify/react-native-skia';
import { styles } from './styles';
import {THEME} from "../../styles/theme";
import {useEffect} from "react";

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
}

const CHECK_SIZE = 28;
const CHECK_STROKE = 2;

export function Option({ checked, title, ...rest }: Props) {

    const percentage = useValue(0);
    const circle = useValue(0);

    const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 2;
    const CENTER_CIRCLE = RADIUS / 2;
    const path = Skia.Path.Make();
    path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

    useEffect(() => {
        if(checked){
            runTiming(percentage, 1, {duration: 400 });
            runTiming(circle, CENTER_CIRCLE, {easing: Easing.bounce });
        }else{
            runTiming(percentage, 0, {duration: 200 });
            runTiming(circle, 0, {duration: 200 });
        }
    }, [checked]);

  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          checked && styles.checked
        ]
      }
      {...rest}
    >
        <Text style={styles.title}>
          {title}
        </Text>
        <Canvas style={{height: CHECK_SIZE * 2, width: CHECK_SIZE * 2}}>
            <Path
                path={path}
                color={THEME.COLORS.GREY_500}
                style="stroke"
                strokeWidth={CHECK_STROKE}
            />
            <Path
                path={path}
                color={THEME.COLORS.BRAND_LIGHT}
                style="stroke"
                strokeWidth={CHECK_STROKE}
                start={0}
                end={percentage}
            >
                <BlurMask style="solid" blur={1} />
            </Path>
            
            <Circle color={THEME.COLORS.BRAND_LIGHT} r={circle} cx={CHECK_SIZE} cy={CHECK_SIZE} >
                <BlurMask style="solid" blur={4} />
            </Circle>
        </Canvas>
    </TouchableOpacity>
  );
}