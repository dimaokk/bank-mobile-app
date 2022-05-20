import { Text, View, SafeAreaView, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { useTailwind } from "tailwind-rn";

import { useAuth } from "../../../hooks/useAuth";
//UI
import { Loader } from "../../UI/Loader";
import { Field } from "../../UI/Field";
import { Button } from "../../UI/Button";

interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();

  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const tailwind = useTailwind();

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) await register(email, password);
    else await login(email, password);

    setData({} as IData);
  };

  return (
    <SafeAreaView>
      <View style={tailwind("h-full w-full")}>
        <View style={tailwind("mx-5 items-center justify-center h-full")}>
          <View style={tailwind("w-9/12")}>
            <Text
              style={tailwind(
                "text-center text-gray-500 text-2xl font-bold mb-3"
              )}
            >
              {isReg ? "Войти" : "Зарегестрироваться"}
            </Text>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Field
                  val={data.email}
                  onChange={(val) => setData({ ...data, email: val })}
                  placeholder={"Введите e-mail"}
                />
                <Field
                  val={data.password}
                  onChange={(val) => setData({ ...data, password: val })}
                  placeholder={"Введите пароль"}
                  // isSecure={true}
                />
                <Button title="Продолжить" onPress={authHandler} />
                <Pressable onPress={() => setIsReg(!isReg)}>
                  <Text
                    style={tailwind(
                      "text-gray-800 opacity-30 text-center text-sm"
                    )}
                  >
                    {isReg ? "Зарегистрироваться" : "Войти"}
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
