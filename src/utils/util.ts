//	手机号脱敏
export function phoneNumberMask(phoneNumber: string) {
  const prefix = phoneNumber.substring(0, 3);
  const suffix = phoneNumber.substring(
    phoneNumber.length - 4,
    phoneNumber.length,
  );
  return prefix + '****' + suffix;
}
