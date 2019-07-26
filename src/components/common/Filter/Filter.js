import React, { Fragment } from 'react';

import './Filter.scss';

const Filter =  ({ className }) => {

    return(
        <Fragment>
            <div className={className}>
                <div className="filter__header">
                    <div className="filter__header-text">Filter 486 items</div>

                    <div>Gender: Woman</div>
                    <div>Gender: Dresses</div>
                </div>

                <div className="filter__range">
                    <div className="filter__range__colors">
                        <div className="filter__range__colors-text">
                            Color
                        </div>

                        <div className="filter__range__colors-ops">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="filter__range__size">
                        <div className="filter__range__size-text">
                            Size
                        </div>

                        <div className="filter__range__size-ops">
                            <div>One</div>
                            <div>One</div>
                            <div>One</div>
                            <div>One</div>
                            <div>One</div>
                        </div>

                    </div>

                    <div className="filter__range__pr-range">
                        <div className="filter__range__pr-range-text">
                            Price Range
                        </div>

                        <div className="filter__range__pr-range-ops">
                            range bar
                        </div>

                    </div>


                    <div className="filter__range__brand">
                        <div className="filter__range__brand-text">
                            Brands
                        </div>

                        <div className="filter__range__brand-ops">
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>Brand 1</div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="filter__apply">
                    <button className="btn-sm btn-primary"> Apply </button>
                    <div>Clear All</div>
                </div>

            </div>
        </Fragment>
    )
}

export default Filter;