from elasticsearch_dsl import DocType, Text, Date, Float, Boolean, Keyword, Integer
from analyzers import autocomplete_analyzer, autocomplete_search_analyzer, email_analyzer

# abstraction of this should require index_name = <index_name>
# then create a class method, get_index_by_name(index_name)


class FlatUser(DocType):
    profile_uuid = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)

    account_count = Float()
    account_id = Float()
    account_uuid = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)

    active = Text(analyzer=autocomplete_analyzer,
                  search_analyzer=autocomplete_search_analyzer)
    annual_usage = Float()
    annual_usage_percentage = Float()

    best_address = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)

    best_address_apartment = Text(analyzer=autocomplete_analyzer,
                                  search_analyzer=autocomplete_search_analyzer)
    best_address_zipcode = Text(analyzer=autocomplete_analyzer,
                                search_analyzer=autocomplete_search_analyzer)

    created_at = Float()
    crm_last_updated = Float()
    crm_update_version = Text(analyzer=autocomplete_analyzer,
                              search_analyzer=autocomplete_search_analyzer)
    crm_updating_error_count = Text(analyzer=autocomplete_analyzer,
                                    search_analyzer=autocomplete_search_analyzer)
    crm_updating_error_list = Text(analyzer=autocomplete_analyzer,
                                   search_analyzer=autocomplete_search_analyzer)
    dashboard_mode = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)
    email = Text(analyzer=email_analyzer)
    first_name = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)

    gbc_cisr_id = Text(analyzer=autocomplete_analyzer,
                       search_analyzer=autocomplete_search_analyzer)
    gbc_count = Float()
    gbc_signup = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)
    gbc_signup_date = Float()
    gbc_still_valid = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    gbc_utility = Text(analyzer=autocomplete_analyzer,
                       search_analyzer=autocomplete_search_analyzer)
    green_button_datastream_count = Float()
    green_button_datastream_exists = Text(analyzer=autocomplete_analyzer,
                                          search_analyzer=autocomplete_search_analyzer)
    green_button_datastream_newest_datapoint = Float()
    green_button_datastream_uuid = Text(analyzer=autocomplete_analyzer,
                                        search_analyzer=autocomplete_search_analyzer)
    green_button_gateway_address = Text(analyzer=autocomplete_analyzer,
                                        search_analyzer=autocomplete_search_analyzer)
    green_button_gateway_count = Float()
    green_button_gateway_uuid = Text(analyzer=autocomplete_analyzer,
                                     search_analyzer=autocomplete_search_analyzer)

    has_solar = Text(analyzer=autocomplete_analyzer,
                     search_analyzer=autocomplete_search_analyzer)
    house_count = Float()
    house_id = Float()
    house_id = Float()
    house_uuid = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)

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

    labels = Text(analyzer=autocomplete_analyzer,
                  search_analyzer=autocomplete_search_analyzer)
    last_name = Text(analyzer=autocomplete_analyzer,
                     search_analyzer=autocomplete_search_analyzer)

    order_address1 = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)
    order_address2 = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)
    order_city = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)
    order_count = Float()
    order_date = Float()
    order_firstname = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    order_id = Float()
    order_lastname = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)
    order_skus = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)
    order_status = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)
    order_uuid = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)
    order_zipcode = Text(analyzer=autocomplete_analyzer,
                         search_analyzer=autocomplete_search_analyzer)

    phone = Text(analyzer=autocomplete_analyzer,
                 search_analyzer=autocomplete_search_analyzer)
    phone_number_count = Float()
    phone_number_value = Text(analyzer=autocomplete_analyzer,
                              search_analyzer=autocomplete_search_analyzer)

    push_token_active = Text(analyzer=autocomplete_analyzer,
                             search_analyzer=autocomplete_search_analyzer)
    push_token_count = Float()
    push_token_type = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    push_token_value = Text(analyzer=autocomplete_analyzer,
                            search_analyzer=autocomplete_search_analyzer)

    rainforest_first_heartbeat = Float()
    rainforest_gateway_count = Float()
    rainforest_last_heartbeat = Float()
    rainforest_mac_id = Text(analyzer=autocomplete_analyzer,
                             search_analyzer=autocomplete_search_analyzer)
    rainforest_status_code = Text(analyzer=autocomplete_analyzer,
                                  search_analyzer=autocomplete_search_analyzer)
    rainforest_uuid = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)

    telegesis_first_heartbeat = Float()
    telegesis_gateway_count = Float()
    telegesis_last_heartbeat = Float()
    telegesis_mac_id = Text(analyzer=autocomplete_analyzer,
                            search_analyzer=autocomplete_search_analyzer)
    telegesis_status_code = Text(analyzer=autocomplete_analyzer,
                                 search_analyzer=autocomplete_search_analyzer)
    telegesis_uuid = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)
    tracking_number = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    tracking_number_human = Text(analyzer=autocomplete_analyzer,
                                 search_analyzer=autocomplete_search_analyzer)

    username = Text(analyzer=email_analyzer)

    utility_company = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    utility_company_gbc_supported = Float()
    utility_credentials = Text(analyzer=autocomplete_analyzer,
                               search_analyzer=autocomplete_search_analyzer)

    low_income_electricity_assistance_program = Text(analyzer=autocomplete_analyzer,
                                                     search_analyzer=autocomplete_search_analyzer)
    late_bills = Text(analyzer=autocomplete_analyzer,
                      search_analyzer=autocomplete_search_analyzer)
    list_of_household_appliances = Text(analyzer=autocomplete_analyzer,
                                        search_analyzer=autocomplete_search_analyzer)

    home_value = Float()
    home_sqft = Float()
    home_bedrooms = Float()
    household_members = Float()
    household_income = Float()
    household_race_ethnicity = Text(analyzer=autocomplete_analyzer,
                                    search_analyzer=autocomplete_search_analyzer)
    own_air_conditioner = Float()
    census_block = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)
    voting_precinct = Text(analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)
    pev_owner = Float()
    pev_model = Text(analyzer=autocomplete_analyzer,
                     search_analyzer=autocomplete_search_analyzer)
    solar_owner = Float()
    solar_kw_size = Float()
    turf_rebate = Text(analyzer=autocomplete_analyzer,
                       search_analyzer=autocomplete_search_analyzer)
    method_of_entering_experiment = Text(analyzer=autocomplete_analyzer,
                                         search_analyzer=autocomplete_search_analyzer)
    customer_phone_type = Text(analyzer=autocomplete_analyzer,
                               search_analyzer=autocomplete_search_analyzer)

    rate = Text(analyzer=autocomplete_analyzer,
                search_analyzer=autocomplete_search_analyzer)

    best_hourly_gateway_uid = Text(analyzer=autocomplete_analyzer,
                                   search_analyzer=autocomplete_search_analyzer)
    best_realtime_gateway_uid = Text(analyzer=autocomplete_analyzer,
                                     search_analyzer=autocomplete_search_analyzer)

    has_ev = Boolean()
    has_home_battery = Boolean()
    has_lights = Boolean()
    has_ac = Boolean()

    program_status = Text(analyzer=autocomplete_analyzer,
                          search_analyzer=autocomplete_search_analyzer)

    first_datapoint = Float()
    first_interval_datapoint = Float()
    last_interval_datapoint = Float()
    first_realtime_datapoint = Float()
    last_realtime_datapoint = Float()

    best_data_resolution = Text(analyzer=autocomplete_analyzer,
                                search_analyzer=autocomplete_search_analyzer)
    best_data_resolution_seconds = Float()

    utility_rate = Text(analyzer=autocomplete_analyzer,
                        search_analyzer=autocomplete_search_analyzer)

    # setting multi=True creates an empty list by default
    owners = Text(multi=True, analyzer=autocomplete_analyzer,
                  search_analyzer=autocomplete_search_analyzer)
    owners_id = Integer(multi=True)

    demand_response_cohorts = Text(multi=True, analyzer=autocomplete_analyzer,
                                   search_analyzer=autocomplete_search_analyzer)
    chai_test_user = Boolean()

    demand_response_total_points_earned = Float()
    demand_response_events_participated_percentage = Float()
    demand_response_event_count = Float()

    appliances_list = Text(multi=True, analyzer=autocomplete_analyzer,
                           search_analyzer=autocomplete_search_analyzer)

    label__name = Text(multi=True, analyzer=autocomplete_analyzer,
                       search_analyzer=autocomplete_search_analyzer)

    # these stand for perturbed lat/lng values of the end user
    p_lat = Float()
    p_lng = Float()

    def save(self, **kwargs):
        return super(FlatUser, self).save(**kwargs)
