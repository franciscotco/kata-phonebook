export function checkName(text) {
   if (text === "") return false;
   return true;
}

export function isDigit(char) {
   if (char < '0' && char > '9') return false;
   return true;
}

export function parseNumber(phoneNumber, cnt, max_number) {
   const stop = cnt + max_number

   while (cnt < stop) {
      if (!isDigit(phoneNumber[cnt++])) return -1;
   }
   return cnt;
}

export function checkPhoneNumber(phoneNumber) {
   let cnt = 0;

   if (phoneNumber[cnt++] !== '+') return false;
   if ((cnt = parseNumber(phoneNumber, cnt, 2)) === -1) return false;
   if (phoneNumber[cnt++] !== ' ') return false;
   if ((cnt = parseNumber(phoneNumber, cnt, 2)) === -1) return false;
   if (phoneNumber[cnt++] !== ' ') return false;

   const min_six = cnt + 6;

   if ((cnt = parseNumber(phoneNumber, cnt, phoneNumber.length - cnt)) === -1) return false;
   if (cnt < min_six) return false;
   return true;
}

export function sendQuery(link, params) {
   const url = new URL(link);

   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
   return url;
}