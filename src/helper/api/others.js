import { References } from '../../api/other';

const GetReferences = async () => {
  let response = await References();
  return response;
};
export default { GetReferences };
