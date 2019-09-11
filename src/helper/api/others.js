import { References } from '../../api/other';

const GetReferences = async () => {
  const response = await References();
  return response;
};
export default { GetReferences };
