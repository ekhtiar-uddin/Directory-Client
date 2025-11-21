import { TCompany, TQueryParam, TResponseRedux } from "../../../types";

import { baseApi } from "../../api/baseApi";

const companyManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/companies",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["company"],
      transformResponse: (response: TResponseRedux<TCompany[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllCompaniesQuery } = companyManagementApi;
