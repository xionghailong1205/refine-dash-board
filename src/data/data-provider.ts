import type { DataProvider } from "@refinedev/core";
import { getMockData } from "./mock-data";

/**
 * A simple mock data provider for Refine.
 * Replace this with a real data provider (e.g., REST, GraphQL) when connecting to a backend.
 */
export const mockDataProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters }) => {
    let data = [...getMockData(resource)] as Record<string, unknown>[];

    // Apply filters
    if (filters && filters.length > 0) {
      for (const filter of filters) {
        if ("field" in filter && filter.field && filter.value !== undefined) {
          data = data.filter((item) => {
            const fieldValue = String(item[filter.field as string] ?? "");
            const filterValue = String(filter.value);
            switch (filter.operator) {
              case "eq":
                return fieldValue === filterValue;
              case "contains":
                return fieldValue.toLowerCase().includes(filterValue.toLowerCase());
              default:
                return true;
            }
          });
        }
      }
    }

    // Apply sorting
    if (sorters && sorters.length > 0) {
      const sorter = sorters[0];
      data.sort((a, b) => {
        const aVal = a[sorter.field] as string | number;
        const bVal = b[sorter.field] as string | number;
        if (aVal < bVal) return sorter.order === "asc" ? -1 : 1;
        if (aVal > bVal) return sorter.order === "asc" ? 1 : -1;
        return 0;
      });
    }

    const total = data.length;

    // Apply pagination
    if (pagination) {
      const { currentPage = 1, pageSize = 10 } = pagination;
      const start = (currentPage - 1) * pageSize;
      data = data.slice(start, start + pageSize);
    }

    return {
      data: data as never[],
      total,
    };
  },

  getOne: async ({ resource, id }) => {
    const data = getMockData(resource) as Record<string, unknown>[];
    const record = data.find((item) => String(item.id) === String(id));
    if (!record) {
      throw new Error(`Record not found: ${resource}/${id}`);
    }
    return { data: record as never };
  },

  create: async ({ resource, variables }) => {
    const data = getMockData(resource) as Record<string, unknown>[];
    const newId = Math.max(0, ...data.map((d) => Number(d.id))) + 1;
    const newRecord = { id: newId, ...(variables as Record<string, unknown>) };
    data.push(newRecord);
    return { data: newRecord as never };
  },

  update: async ({ resource, id, variables }) => {
    const data = getMockData(resource) as Record<string, unknown>[];
    const index = data.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      throw new Error(`Record not found: ${resource}/${id}`);
    }
    data[index] = { ...data[index], ...(variables as Record<string, unknown>) };
    return { data: data[index] as never };
  },

  deleteOne: async ({ resource, id }) => {
    const data = getMockData(resource) as Record<string, unknown>[];
    const index = data.findIndex((item) => String(item.id) === String(id));
    if (index === -1) {
      throw new Error(`Record not found: ${resource}/${id}`);
    }
    const [deleted] = data.splice(index, 1);
    return { data: deleted as never };
  },

  getApiUrl: () => "https://api.example.com",
};
