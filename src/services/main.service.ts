import request from '../utils/Request';
import { PeopleResponseModel, PlanetModel } from '../models';
import { Methods } from '../config';

const mainService = {
  getData: (page: number, search?: string) => {
    let params = `?page=${page}`;
    if (search) params += `&search=${search}`;

    return request<PeopleResponseModel>({
      method: Methods.GET,
      resource: `people${params}`,
    });
  },

  getTerrain: (id: number) => {
    return request<PlanetModel>({
      method: Methods.GET,
      resource: `planets/${id}`,
    });
  },
};

export default mainService;
