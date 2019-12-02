const probeEntryComponent = () => {
  return `
  <h1>Eyes on the Sky</h1>
  <header>
      <fieldset class='dateSearch'>
        <label for='probeDate'>Date of Entry</label>
        <input type="date" name='probeDate' id='probeDate'>
        <button>Search</button> 
      </fieldset>
    </header>
  <article class='satelliteInfo'>
  <section class='probePhotos'>
     <h2>Probe Photos</h2>
      <div class='images_probes'></div>
    </section>
    <section class='probeObjectInfo'>
      <h2>Object of Probe Info</h2>
    </section>
    </article>
    <article class='favorites'>
    <section class='favoriteImages'>
      <h2>Favorite List</h2>
    </section>
  </article>
  `;
};

export default probeEntryComponent;
