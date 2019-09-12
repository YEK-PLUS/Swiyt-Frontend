import { References,SwiytComments } from '../../api/other';

const GetReferences = async () => {
  const response = await References();
  return response;
};
const GetSwiytComments = async () => {
  const response = await SwiytComments();
  return response;
};
export default { GetReferences,GetSwiytComments };
