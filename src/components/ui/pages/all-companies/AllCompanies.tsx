/* eslint-disable react-hooks/exhaustive-deps */
import {
  BadgePlus,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Minus,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { BiCategory } from "react-icons/bi";
import { MdBusiness } from "react-icons/md";
import { useGetAllCompaniesQuery } from "../../../../redux/features/admin/companyManagement.api";
import {
  selectGlobalParams,
  setGlobalParams,
} from "../../../../redux/features/auth/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Button } from "../../../reusable/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import SingleCompanyCard from "./SingleCompanyCard";
import SingleCompanyCardSkeleton from "./SingleCompanyCardSkeleton";

const AllCompanies = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const globalParams = useAppSelector(selectGlobalParams) || [];

  const { data: allCompaniesData, isLoading: isLoadingAll } =
    useGetAllCompaniesQuery([]);

  const paginatedParams = useMemo(() => {
    const params = Array.isArray(globalParams) ? globalParams : [];

    return [
      ...params,
      { name: "page", value: currentPage.toString() },
      { name: "limit", value: "9" },
    ];
  }, [globalParams, currentPage]);

  const {
    data: companyData,
    isLoading,
    isFetching,
  } = useGetAllCompaniesQuery(paginatedParams);

  console.log("Company Data:", companyData);
  console.log("Global Params:", globalParams);
  console.log("Paginated Params:", paginatedParams);

  const { uniqueIndustries, uniqueLocations, uniqueSizes, foundedYearRanges } =
    useMemo(() => {
      if (!allCompaniesData?.data || allCompaniesData.data.length === 0) {
        return {
          uniqueIndustries: [],
          uniqueLocations: [],
          uniqueSizes: [],
          foundedYearRanges: [],
        };
      }

      // Get unique industries and sort alphabetically
      const industries = [
        ...new Set(allCompaniesData.data.map((c) => c.industry)),
      ].sort();

      // Get unique locations and sort alphabetically
      const locations = [
        ...new Set(allCompaniesData.data.map((c) => c.location)),
      ].sort();

      // Get unique sizes and sort by numeric value
      const sizes = [...new Set(allCompaniesData.data.map((c) => c.size))].sort(
        (a, b) => {
          const getFirstNumber = (str: string) => {
            const match = str.match(/\d+/);
            return match ? parseInt(match[0]) : 0;
          };
          return getFirstNumber(a) - getFirstNumber(b);
        }
      );

      // Generate founded year ranges dynamically
      const foundedYears = allCompaniesData.data.map((c) => c.founded);
      const minYear = Math.min(...foundedYears);
      const maxYear = Math.max(...foundedYears);

      const ranges = [];
      let currentMax = Math.ceil(maxYear / 5) * 5;
      let currentMin = currentMax - 4;

      while (currentMin >= minYear) {
        ranges.push({
          minFounded: currentMin,
          maxFounded: currentMax,
          label: `${currentMin} - ${currentMax}`,
        });
        currentMax = currentMin - 1;
        currentMin = currentMax - 4;
      }

      return {
        uniqueIndustries: industries,
        uniqueLocations: locations,
        uniqueSizes: sizes,
        foundedYearRanges: ranges,
      };
    }, [allCompaniesData]);

  const onSubmit = async (data: any) => {
    if (data.searchTerm) {
      setCurrentPage(1);
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "searchTerm") || []),
          { name: "searchTerm", value: data.searchTerm },
        ])
      );
    }
    reset();
  };

  const handleSearchChange = (value: string) => {
    if (value.trim() === "") {
      dispatch(
        setGlobalParams(
          globalParams?.filter((p) => p.name !== "searchTerm") || []
        )
      );
    } else {
      setCurrentPage(1);
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "searchTerm") || []),
          { name: "searchTerm", value: value },
        ])
      );
    }
  };

  const handleSortChange = (value: string) => {
    setCurrentPage(1);
    if (value === "name") {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "sort") || []),
          { name: "sort", value: "name" },
        ])
      );
    } else if (value === "-name") {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "sort") || []),
          { name: "sort", value: "-name" },
        ])
      );
    } else if (value === "founded") {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "sort") || []),
          { name: "sort", value: "founded" },
        ])
      );
    } else if (value === "-founded") {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "sort") || []),
          { name: "sort", value: "-founded" },
        ])
      );
    } else {
      dispatch(
        setGlobalParams(globalParams?.filter((p) => p.name !== "sort") || [])
      );
    }
  };

  const handleFilterByLocation = (value: string) => {
    setCurrentPage(1);
    if (value === "any") {
      dispatch(
        setGlobalParams(
          globalParams?.filter((p) => p.name !== "location") || []
        )
      );
    } else {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "location") || []),
          { name: "location", value: value },
        ])
      );
    }
  };

  const handleFilterBySize = (value: string) => {
    setCurrentPage(1);
    if (value === "any") {
      dispatch(
        setGlobalParams(globalParams?.filter((p) => p.name !== "size") || [])
      );
    } else {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "size") || []),
          { name: "size", value: value },
        ])
      );
    }
  };

  const handleFilterByIndustry = (industryValue: string) => {
    setCurrentPage(1);
    const currentIndustry = globalParams?.find(
      (p) => p.name === "industry"
    )?.value;

    if (currentIndustry === industryValue) {
      dispatch(
        setGlobalParams(
          globalParams?.filter((p) => p.name !== "industry") || []
        )
      );
    } else {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter((p) => p.name !== "industry") || []),
          { name: "industry", value: industryValue },
        ])
      );
    }
  };

  const handleFilterByFoundedRange = (
    minFounded: number,
    maxFounded: number
  ) => {
    setCurrentPage(1);
    const isCurrentlySelected = isFoundedRangeSelected(minFounded, maxFounded);

    if (isCurrentlySelected) {
      dispatch(
        setGlobalParams(
          globalParams?.filter(
            (p) => p.name !== "minFounded" && p.name !== "maxFounded"
          ) || []
        )
      );
    } else {
      dispatch(
        setGlobalParams([
          ...(globalParams?.filter(
            (p) => p.name !== "minFounded" && p.name !== "maxFounded"
          ) || []),
          { name: "minFounded", value: minFounded.toString() },
          { name: "maxFounded", value: maxFounded.toString() },
        ])
      );
    }
  };

  const isIndustrySelected = (industryValue: string) => {
    const currentIndustry = globalParams?.find(
      (p) => p.name === "industry"
    )?.value;
    return currentIndustry === industryValue;
  };

  const isFoundedRangeSelected = (minFounded: number, maxFounded: number) => {
    const currentMin = globalParams?.find(
      (p) => p.name === "minFounded"
    )?.value;
    const currentMax = globalParams?.find(
      (p) => p.name === "maxFounded"
    )?.value;
    return (
      currentMin === minFounded.toString() &&
      currentMax === maxFounded.toString()
    );
  };

  const clearAllFilters = () => {
    setCurrentPage(1);
    dispatch(setGlobalParams(undefined));
    reset();
  };

  const activeFiltersCount = globalParams?.length || 0;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = companyData?.meta?.totalPage || 0;
  const currentPageData = companyData?.meta?.page || 1;

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPageData <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPageData >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPageData - 1; i <= currentPageData + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <section className={`mt-10 customWidth`}>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="my-5 cursor-pointer"
      >
        <h1 className="flex items-center justify-between lg:hidden bg-[#1a1a1a] text-white p-4">
          SHOW FILTER {openFilter ? <Minus /> : <Plus />}
        </h1>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Companies Directory</h1>
          <p className="text-d1 mt-5 mb-8">
            Explore top companies across industries. Find businesses by
            location, industry, size, and more.
          </p>
        </div>
        {activeFiltersCount > 0 && (
          <Button
            variant="normal"
            onClick={clearAllFilters}
            className="border cursor-pointer lg:mb-0 mb-3"
          >
            Clear All Filters <X />
          </Button>
        )}
      </div>

      <div className="flex lg:flex-row flex-col gap-10 mb-20">
        {/* FILTER SIDEBAR */}
        <div
          className={`${
            openFilter
              ? "lg:w-[350px] w-full lg:block"
              : "hidden w-[350px] lg:block"
          }`}
        >
          {/* Search Input */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5 w-full rounded-lg">
                <div className="border-2 border-white focus-within:border-2 focus-within:border-p1 rounded-lg p-[1px]">
                  <div className="pl-2 rounded-md flex items-center border border-[#D9D9D9]">
                    <Search className="mr-2 w-[20px]" />
                    <input
                      {...register("searchTerm")}
                      name="searchTerm"
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="text-sm font-semibold w-full h-[40px] outline-none"
                      type="text"
                      placeholder="Search companies..."
                      tabIndex={0}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-2 bg-p1">
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Sort By Dropdown */}
          <div className="mb-5 border-2 border-white focus-within:border-p1 focus-within:border-2 rounded-lg p-[1px]">
            <Select
              value={
                (globalParams?.find((p) => p.name === "sort")
                  ?.value as string) || "name"
              }
              onValueChange={handleSortChange}
            >
              <SelectTrigger className="rounded-md w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b3 focus:outline-none">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="font-Inter text-sm" value="name">
                  Name: A to Z
                </SelectItem>

                <SelectItem className="font-Inter text-sm" value="-name">
                  Name: Z to A
                </SelectItem>
                <SelectItem className="font-Inter text-sm" value="founded">
                  Founded: Old to New
                </SelectItem>
                <SelectItem className="font-Inter text-sm" value="-founded">
                  Founded: New to Old
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Industries Filter */}
          {isLoadingAll ? (
            <div className="border mt-4 border-b3 p-4 rounded-lg">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="border mt-4 border-b3 p-4 rounded-lg max-h-[300px] overflow-y-auto">
              <div className="flex items-center gap-2 font-semibold mb-2">
                <BiCategory />
                Industry ({uniqueIndustries.length})
              </div>
              <div>
                {uniqueIndustries.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-2 rounded-lg hover:bg-lowWhite text-sm cursor-pointer transition-all duration-300 hover:text-p1 ${
                      isIndustrySelected(item) ? "text-p1 bg-lowWhite" : ""
                    }`}
                    onClick={() => handleFilterByIndustry(item)}
                  >
                    <CircleCheck className="w-[15px]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Filter */}
          <div className="mt-5 border-2 border-white focus-within:border-p1 focus-within:border-2 rounded-lg p-[1px]">
            <Select
              value={
                (globalParams?.find((p) => p.name === "location")
                  ?.value as string) || ""
              }
              onValueChange={handleFilterByLocation}
            >
              <SelectTrigger className="rounded-md w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b3 focus:outline-none">
                <SelectValue placeholder="Filter By Location" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]">
                <SelectItem className="font-Inter text-sm" value="any">
                  All Locations
                </SelectItem>
                {uniqueLocations.map((location) => (
                  <SelectItem
                    key={location}
                    value={location}
                    className="font-Inter text-sm"
                  >
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Company Size Filter */}
          <div className="mt-2 border-2 border-white focus-within:border-p1 focus-within:border-2 rounded-lg p-[1px]">
            <Select
              value={
                (globalParams?.find((p) => p.name === "size")
                  ?.value as string) || ""
              }
              onValueChange={handleFilterBySize}
            >
              <SelectTrigger className="rounded-md w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b3 focus:outline-none">
                <SelectValue placeholder="Filter By Company Size" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="font-Inter text-sm" value="any">
                  All Sizes
                </SelectItem>
                {uniqueSizes.map((size) => (
                  <SelectItem
                    key={size}
                    value={size}
                    className="font-Inter text-sm"
                  >
                    {size} employees
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Founded Year Range */}
          <div className="mt-5 border border-b3 p-4 rounded-lg">
            <div className="flex items-center gap-2 font-semibold mb-2">
              <MdBusiness className="w-[20px]" />
              Founded Year
            </div>
            <div className="mt-1">
              {foundedYearRanges.map(
                ({ minFounded, maxFounded, label }, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      handleFilterByFoundedRange(minFounded, maxFounded)
                    }
                    className={`flex items-center gap-2 p-2 rounded-lg hover:bg-lowWhite text-sm cursor-pointer transition-all duration-300 ${
                      isFoundedRangeSelected(minFounded, maxFounded)
                        ? "text-p1 bg-lowWhite"
                        : "hover:text-p1"
                    }`}
                  >
                    <BadgePlus className="w-[15px]" />
                    <p>{label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* COMPANIES GRID */}
        <div className="flex-1">
          {isLoading || isFetching ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <SingleCompanyCardSkeleton key={index} />
              ))}
            </div>
          ) : !companyData?.data || companyData.data.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">
                No companies found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters or search criteria
              </p>
              {activeFiltersCount > 0 && (
                <Button
                  onClick={clearAllFilters}
                  className="mt-4 bg-p1 hover:bg-p1/90"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-600 flex justify-between items-center">
                <span>
                  Showing {companyData.data.length} of {companyData?.meta.total}{" "}
                  companies
                </span>
                <span>
                  Page {currentPageData} of {totalPages}
                </span>
              </div>

              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                {companyData?.data?.map((company) => (
                  <SingleCompanyCard company={company} key={company._id} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    onClick={() => handlePageChange(currentPageData - 1)}
                    disabled={currentPageData === 1}
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {getPageNumbers().map((page, index) => (
                    <Button
                      key={index}
                      onClick={() =>
                        typeof page === "number" && handlePageChange(page)
                      }
                      disabled={page === "..."}
                      className={`px-4 py-2 ${
                        page === currentPageData
                          ? "bg-p1 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } ${
                        page === "..." ? "cursor-default hover:bg-gray-200" : ""
                      }`}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    onClick={() => handlePageChange(currentPageData + 1)}
                    disabled={currentPageData === totalPages}
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCompanies;
