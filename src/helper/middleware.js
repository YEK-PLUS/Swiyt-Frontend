const createUrl = (string)=>{
  string = string.toLowerCase();
  string = string.replace(" ","-");
  string = string.replace("i","ı");
  string = string.replace("ş","s");
  string = string.replace("ğ","g");
  string = string.replace("ü","u");
  string = string.replace("ç","c");
  string = string.replace("ö","o");
  return string;
}
export default {createUrl}
