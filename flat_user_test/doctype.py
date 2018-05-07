from elasticsearch_dsl import DocType, Text, Float, Boolean, Keyword, MetaField
from analyzers import autocomplete, email_analyzer, autocomplete_search, postcode, postcode_search, suffix

# abstraction of this should require index_name = <index_name>
# then create a class method, get_index_by_name(index_name)


def add_keyword_field_for_sorting(fields):
    additional_fields = {
        'keyword': Keyword()
    }

    if fields != None and isinstance(fields, dict):
        additional_fields.update(fields)

    return additional_fields


def get_es_text_field(analyzer, search_analyzer=None, multi=False, fields=None):
    additional_fields = add_keyword_field_for_sorting(fields=fields)

    if search_analyzer == None:
        return Text(analyzer=analyzer, multi=multi, fields=additional_fields)

    return Text(analyzer=analyzer, search_analyzer=search_analyzer, multi=multi, fields=additional_fields)


def get_es_keyword_field(search_analyzer=None, multi=False, fields=None):
    additional_fields = add_keyword_field_for_sorting(fields=fields)

    if search_analyzer == None:
        return Keyword(multi=multi, fields=additional_fields)

    return Keyword(search_analyzer=search_analyzer, multi=multi, fields=additional_fields)


class FlatUser(DocType):
    # base model generated fields
    id = Float()
    uuid = get_es_text_field(analyzer=autocomplete,
                             search_analyzer=autocomplete_search)
    last_updated = Float()
    created_at = Float()

    profile_uuid = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    account_count = Float()
    account_id = Float()
    account_uuid = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    active = get_es_text_field(analyzer=autocomplete,
                               search_analyzer=autocomplete_search)
    annual_usage = Float()
    annual_usage_percentage = Float()

    best_address = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    best_address_apartment = get_es_text_field(analyzer=autocomplete,
                                               search_analyzer=autocomplete_search)
    best_address_zipcode = get_es_text_field(analyzer=postcode,
                                             search_analyzer=postcode_search)

    crm_last_updated = Float()
    crm_update_version = get_es_keyword_field()
    crm_updating_error_count = get_es_keyword_field()
    crm_updating_error_list = get_es_text_field(analyzer=autocomplete,
                                                search_analyzer=autocomplete_search)

    dashboard_mode = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)
    email = get_es_text_field(
        analyzer=email_analyzer, search_analyzer=autocomplete_search)

    first_name = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)

    gbc_cisr_id = get_es_text_field(analyzer=suffix)
    gbc_count = Float()
    gbc_signup = get_es_keyword_field()
    gbc_signup_date = Float()
    gbc_still_valid = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    gbc_utility = get_es_keyword_field()
    green_button_datastream_count = Float()
    green_button_datastream_exists = get_es_text_field(analyzer=autocomplete,
                                                       search_analyzer=autocomplete_search)
    green_button_datastream_newest_datapoint = Float()
    green_button_datastream_uuid = get_es_text_field(analyzer=autocomplete,
                                                     search_analyzer=autocomplete_search)
    green_button_gateway_address = get_es_text_field(analyzer=autocomplete,
                                                     search_analyzer=autocomplete_search)
    green_button_gateway_count = Float()
    green_button_gateway_uuid = get_es_text_field(analyzer=autocomplete,
                                                  search_analyzer=autocomplete_search)

    has_solar = get_es_keyword_field()
    house_count = Float()
    house_id = Float()
    house_id = Float()
    house_uuid = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)

    insight_ac_schedule_date = Float()
    insight_ac_getpoints_date = Float()
    insight_count = Float()
    insight_monthly_baseload_date = Float()
    insight_monthly_everything_off_date = Float()
    insight_monthly_usage_date = Float()
    insight_power_ranking_date = Float()
    insight_predicted_bill_date = Float()
    insight_rate_analysis_date = Float()
    insight_solar_analysis_date = Float()
    insight_solar_promotion_date = Float()
    insight_weekly_usage_date = Float()

    labels = get_es_text_field(analyzer=autocomplete,
                               search_analyzer=autocomplete_search)
    last_name = get_es_text_field(analyzer=autocomplete,
                                  search_analyzer=autocomplete_search)

    order_address1 = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)
    order_address2 = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)
    order_city = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    order_count = Float()
    order_date = Float()
    order_firstname = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    order_id = Float()
    order_lastname = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)
    order_skus = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    order_status = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)
    order_uuid = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    order_zipcode = get_es_text_field(analyzer=autocomplete,
                                      search_analyzer=autocomplete_search)

    phone = get_es_text_field(analyzer=autocomplete,
                              search_analyzer=autocomplete_search)
    phone_number_count = Float()
    phone_number_value = get_es_text_field(analyzer=autocomplete,
                                           search_analyzer=autocomplete_search)

    push_token_active = get_es_text_field(analyzer=autocomplete,
                                          search_analyzer=autocomplete_search)
    push_token_count = Float()
    push_token_type = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    push_token_value = get_es_text_field(analyzer=autocomplete,
                                         search_analyzer=autocomplete_search)

    rainforest_first_heartbeat = Float()
    rainforest_gateway_count = Float()
    rainforest_last_heartbeat = Float()
    rainforest_mac_id = get_es_text_field(analyzer=suffix)
    rainforest_status_code = get_es_text_field(analyzer=autocomplete,
                                               search_analyzer=autocomplete_search)
    rainforest_uuid = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)

    telegesis_first_heartbeat = Float()
    telegesis_gateway_count = Float()
    telegesis_last_heartbeat = Float()
    telegesis_mac_id = get_es_text_field(analyzer=suffix)
    telegesis_status_code = get_es_text_field(analyzer=autocomplete,
                                              search_analyzer=autocomplete_search)
    telegesis_uuid = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)
    tracking_number = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    tracking_number_human = get_es_text_field(analyzer=autocomplete,
                                              search_analyzer=autocomplete_search)

    username = get_es_text_field(analyzer=email_analyzer,
                                 search_analyzer=autocomplete_search)

    utility_company = get_es_keyword_field()

    utility_company_gbc_supported = Float()
    utility_credentials = get_es_text_field(analyzer=autocomplete,
                                            search_analyzer=autocomplete_search)

    low_income_electricity_assistance_program = get_es_text_field(analyzer=autocomplete,
                                                                  search_analyzer=autocomplete_search)
    late_bills = get_es_text_field(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    list_of_household_appliances = get_es_text_field(analyzer=autocomplete,
                                                     search_analyzer=autocomplete_search)

    home_value = Float()
    home_sqft = Float()
    home_bedrooms = Float()
    household_members = Float()
    household_income = Float()
    household_race_ethnicity = get_es_text_field(analyzer=autocomplete,
                                                 search_analyzer=autocomplete_search)
    own_air_conditioner = Float()
    census_block = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)
    voting_precinct = get_es_text_field(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    pev_owner = Float()
    pev_model = get_es_text_field(analyzer=autocomplete,
                                  search_analyzer=autocomplete_search)
    solar_owner = Float()
    solar_kw_size = Float()
    turf_rebate = get_es_text_field(analyzer=autocomplete,
                                    search_analyzer=autocomplete_search)
    method_of_entering_experiment = get_es_text_field(analyzer=autocomplete,
                                                      search_analyzer=autocomplete_search)


_eser_phone_type = get_es_text_field(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    rate = get_es_text_field(analyzer=autocomplete,
                             search_analyzer=autocomplete_search)

    best_hourly_gateway_uid = get_es_text_field(analyzer=autocomplete,
                                                search_analyzer=autocomplete_search)
    best_realtime_gateway_uid = get_es_text_field(analyzer=suffix)

    has_ev = Boolean()
    has_home_battery = Boolean()
    has_lights = Boolean()
    has_ac = Boolean()

    program_status = get_es_text_field(analyzer=autocomplete,
                                       search_analyzer=autocomplete_search)

    first_datapoint = Float()
    first_interval_datapoint = Float()
    last_interval_datapoint = Float()
    first_realtime_datapoint = Float()
    last_realtime_datapoint = Float()

    best_data_resolution = get_es_text_field(analyzer=autocomplete,
                                             search_analyzer=autocomplete_search)
    best_data_resolution_seconds = Float()

    # may potentially just store as keyword instead
    utility_rate = get_es_keyword_field()

    # getting multi=True creates an empty list by default
    owners = get_es_text_field(multi=True, analyzer=email_analyzer,
                               search_analyzer=autocomplete_search)
    owners_id = Float(multi=True)

    demand_response_cohorts = get_es_text_field(multi=True, analyzer=autocomplete,
                                                search_analyzer=autocomplete_search)
    chai_test_user = Boolean()

    demand_response_total_points_earned = Float()
    demand_response_events_participated_percentage = Float()
    demand_response_event_count = Float()

    appliances_list = get_es_text_field(multi=True, analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)

    label__name = get_es_text_field(multi=True, analyzer=autocomplete,
                                    search_analyzer=autocomplete_search)

    # these stand for perturbed lat/lng values of the end user
    p_lat = Float()
    p_lng = Float()

    class Meta:
        dynamic = MetaField(False)

    def save(self, **kwargs):
        return super(FlatUser, self).save(**kwargs)
