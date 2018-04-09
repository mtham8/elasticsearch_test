from elasticsearch_dsl import DocType, Text, Date, Float, Boolean, Keyword, Integer
from analyzers import autocomplete, autocomplete_search, email

# abstraction of this should require index_name = <index_name>
# then create a class method, get_index_by_name(index_name)


class FlatUser(DocType):
    profile_uuid = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)

    account_count = Float()
    account_id = Float()
    account_uuid = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)

    active = Text(analyzer=autocomplete,
                  search_analyzer=autocomplete_search)
    annual_usage = Float()
    annual_usage_percentage = Float()

    best_address = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)

    best_address_apartment = Text(analyzer=autocomplete,
                                  search_analyzer=autocomplete_search)
    best_address_zipcode = Text(analyzer=autocomplete,
                                search_analyzer=autocomplete_search)

    created_at = Float()
    crm_last_updated = Float()
    crm_update_version = Text(analyzer=autocomplete,
                              search_analyzer=autocomplete_search)
    crm_updating_error_count = Text(analyzer=autocomplete,
                                    search_analyzer=autocomplete_search)
    crm_updating_error_list = Text(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    dashboard_mode = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)
    email = Text(analyzer=email)
    first_name = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)

    gbc_cisr_id = Text(analyzer=autocomplete,
                       search_analyzer=autocomplete_search)
    gbc_count = Float()
    gbc_signup = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)
    gbc_signup_date = Float()
    gbc_still_valid = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    gbc_utility = Text(analyzer=autocomplete,
                       search_analyzer=autocomplete_search)
    green_button_datastream_count = Float()
    green_button_datastream_exists = Text(analyzer=autocomplete,
                                          search_analyzer=autocomplete_search)
    green_button_datastream_newest_datapoint = Float()
    green_button_datastream_uuid = Text(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    green_button_gateway_address = Text(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)
    green_button_gateway_count = Float()
    green_button_gateway_uuid = Text(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    has_solar = Text(analyzer=autocomplete,
                     search_analyzer=autocomplete_search)
    house_count = Float()
    house_id = Float()
    house_id = Float()
    house_uuid = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)

    insight_ac_schedule_date = Float()
    insight_ac_setpoints_date = Float()
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

    labels = Text(analyzer=autocomplete,
                  search_analyzer=autocomplete_search)
    last_name = Text(analyzer=autocomplete,
                     search_analyzer=autocomplete_search)

    order_address1 = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)
    order_address2 = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)
    order_city = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)
    order_count = Float()
    order_date = Float()
    order_firstname = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    order_id = Float()
    order_lastname = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)
    order_skus = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)
    order_status = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)
    order_uuid = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)
    order_zipcode = Text(analyzer=autocomplete,
                         search_analyzer=autocomplete_search)

    phone = Text(analyzer=autocomplete,
                 search_analyzer=autocomplete_search)
    phone_number_count = Float()
    phone_number_value = Text(analyzer=autocomplete,
                              search_analyzer=autocomplete_search)

    push_token_active = Text(analyzer=autocomplete,
                             search_analyzer=autocomplete_search)
    push_token_count = Float()
    push_token_type = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    push_token_value = Text(analyzer=autocomplete,
                            search_analyzer=autocomplete_search)

    rainforest_first_heartbeat = Float()
    rainforest_gateway_count = Float()
    rainforest_last_heartbeat = Float()
    rainforest_mac_id = Text(analyzer=autocomplete,
                             search_analyzer=autocomplete_search)
    rainforest_status_code = Text(analyzer=autocomplete,
                                  search_analyzer=autocomplete_search)
    rainforest_uuid = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)

    telegesis_first_heartbeat = Float()
    telegesis_gateway_count = Float()
    telegesis_last_heartbeat = Float()
    telegesis_mac_id = Text(analyzer=autocomplete,
                            search_analyzer=autocomplete_search)
    telegesis_status_code = Text(analyzer=autocomplete,
                                 search_analyzer=autocomplete_search)
    telegesis_uuid = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)
    tracking_number = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    tracking_number_human = Text(analyzer=autocomplete,
                                 search_analyzer=autocomplete_search)

    username = Text(analyzer=email)

    utility_company = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    utility_company_gbc_supported = Float()
    utility_credentials = Text(analyzer=autocomplete,
                               search_analyzer=autocomplete_search)

    low_income_electricity_assistance_program = Text(analyzer=autocomplete,
                                                     search_analyzer=autocomplete_search)
    late_bills = Text(analyzer=autocomplete,
                      search_analyzer=autocomplete_search)
    list_of_household_appliances = Text(analyzer=autocomplete,
                                        search_analyzer=autocomplete_search)

    home_value = Float()
    home_sqft = Float()
    home_bedrooms = Float()
    household_members = Float()
    household_income = Float()
    household_race_ethnicity = Text(analyzer=autocomplete,
                                    search_analyzer=autocomplete_search)
    own_air_conditioner = Float()
    census_block = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)
    voting_precinct = Text(analyzer=autocomplete,
                           search_analyzer=autocomplete_search)
    pev_owner = Float()
    pev_model = Text(analyzer=autocomplete,
                     search_analyzer=autocomplete_search)
    solar_owner = Float()
    solar_kw_size = Float()
    turf_rebate = Text(analyzer=autocomplete,
                       search_analyzer=autocomplete_search)
    method_of_entering_experiment = Text(analyzer=autocomplete,
                                         search_analyzer=autocomplete_search)
    customer_phone_type = Text(analyzer=autocomplete,
                               search_analyzer=autocomplete_search)

    rate = Text(analyzer=autocomplete,
                search_analyzer=autocomplete_search)

    best_hourly_gateway_uid = Text(analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    best_realtime_gateway_uid = Text(analyzer=autocomplete,
                                     search_analyzer=autocomplete_search)

    has_ev = Boolean()
    has_home_battery = Boolean()
    has_lights = Boolean()
    has_ac = Boolean()

    program_status = Text(analyzer=autocomplete,
                          search_analyzer=autocomplete_search)

    first_datapoint = Float()
    first_interval_datapoint = Float()
    last_interval_datapoint = Float()
    first_realtime_datapoint = Float()
    last_realtime_datapoint = Float()

    best_data_resolution = Text(analyzer=autocomplete,
                                search_analyzer=autocomplete_search)
    best_data_resolution_seconds = Float()

    utility_rate = Text(analyzer=autocomplete,
                        search_analyzer=autocomplete_search)

    # setting multi=True creates an empty list by default
    owners = Text(multi=True, analyzer=autocomplete,
                  search_analyzer=autocomplete_search)
    owners_id = Integer(multi=True)

    demand_response_cohorts = Text(multi=True, analyzer=autocomplete,
                                   search_analyzer=autocomplete_search)
    chai_test_user = Boolean()

    demand_response_total_points_earned = Float()
    demand_response_events_participated_percentage = Float()
    demand_response_event_count = Float()

    appliances_list = Text(multi=True, analyzer=autocomplete,
                           search_analyzer=autocomplete_search)

    label__name = Text(multi=True, analyzer=autocomplete,
                       search_analyzer=autocomplete_search)

    # these stand for perturbed lat/lng values of the end user
    p_lat = Float()
    p_lng = Float()

    def save(self, **kwargs):
        return super(FlatUser, self).save(**kwargs)
