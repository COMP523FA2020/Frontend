import React from "react";

interface DesignFooterProps {
  itemData: any;
}

export const DesignFooter = () => {
  return (
    <footer className="footer ">
      <section className="columns">
        <div className="column is-6 is-offset-1">
          <div className="content has-text-left">
            <p>
              The Avian Diet Database was created by <a className="has-text-primary" href="http://labs.bio.unc.edu/hurlbert/">Dr. Allen Hurlbert</a>, 
              Professor of Biology at the University of North Carolina at Chapel Hill. 
              The database currently focuses on North American birds but 
              will eventually encompass data for all species globally. 
              The raw data along with a data paper describing the dataset can be found [link for raw data].
            </p>
            <div>
              Database last updated on XXXX.
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="content">
            <p className="has-text-right">hurlbert@bio.unc.edu</p>
            <p className="has-text-right">University of North Carolina</p>
            <p className="has-text-right">(919) 843-9930 (office)</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
