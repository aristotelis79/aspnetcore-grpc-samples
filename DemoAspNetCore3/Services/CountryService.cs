﻿using AutoMapper;
using DemoGrpc.Domain.Entities;
using DemoGrpc.Protobufs;
using DempGrpc.Services.Interfaces;
using Grpc.Core;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Threading.Tasks;

namespace DemoGrpc.Web.Services
{
    public class CountryGrpcService : CountryService.CountryServiceBase
    {
        private readonly ICountryService _countryService;
        private readonly IMapper _mapper;

        public CountryGrpcService(ICountryService countryService, IMapper mapper)
        {
            _countryService = countryService;
            _mapper = mapper;
        }

        //[Authorize]
        public override async Task<CountriesReply> GetAll(EmptyRequest request, ServerCallContext context)
        {
            throw new Exception("_countryService.GetAsync call failed");
            var countries = await _countryService.GetAsync();
            return _mapper.Map<CountriesReply>(countries);
        }

        //[Authorize]
        public override async Task<CountryReply> GetById(CountrySearchRequest request, ServerCallContext context)
        {
            var country = await _countryService.GetByIdAsync(request.CountryId);
            return _mapper.Map<CountryReply>(country);
        }

        //[Authorize]
        public override async Task<CountryReply> Create(CountryCreateRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            //throw new RpcException(new Status(StatusCode.InvalidArgument,"test"), "test");
            var createCountry = _mapper.Map<Country>(request);
            var country = await _countryService.AddAsync(createCountry);
            return _mapper.Map<CountryReply>(country);
        }

        //[Authorize]
        public override async Task<CountryReply> Update(CountryRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            var updateCountry = _mapper.Map<Country>(request);
            var country = await _countryService.UpdateAsync(updateCountry);
            return _mapper.Map<CountryReply>(country);
        }

        //[Authorize]
        public override async Task<EmptyReply> Delete(CountrySearchRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            await _countryService.DeleteAsync(request.CountryId);
            return new EmptyReply();
        }
    }
}