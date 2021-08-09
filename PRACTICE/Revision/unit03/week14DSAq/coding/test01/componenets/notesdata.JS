
function noteData() {

    return `           <h1>Notes App</h1>

            <div id="notsBox">

                <div id="addnots">
                    <h1>Add Nots</h1>
                    <form onsubmit="AddMyAllData(event)">

                        <select id="selectDay">
                            <option value="null">Select Day</option>

                            <optgroup label="More Numbers">

                                <option id="opt1" value="1">1</option>
                                <option id="opt2" value="2">2</option>


                            </optgroup>
                            <optgroup label="More Numbers Part 2">
                                <option id="opt3" value="3">3</option>
                                <option id="opt4" value="4">4</option>
                                <option id="opt5" value="5">5</option>
                            </optgroup>

                            <optgroup label="Some Numbers">

                                <option id="op6" value="6">6</option>
                                <option id="opt7" value="7">7</option>
                            </optgroup>

                        </select>
                        <textarea name="" id="dataAded" cols="80" rows="5"></textarea>
                        <input id="inp7" type="submit">
                    </form>
                </div>


                <div id="addnots">
                    <h1>Show Nots</h1>
                    <form onsubmit="ShowMyAllData(event)">

                        <select id="selectDayShow">
                            <option value="null">Select Day</option>

                            <optgroup label="More Numbers">

                                <option id="opt1" value="1">1</option>
                                <option id="opt2" value="2">2</option>


                            </optgroup>
                            <optgroup label="More Numbers Part 2">
                                <option id="opt3" value="3">3</option>
                                <option id="opt4" value="4">4</option>
                                <option id="opt5" value="5">5</option>
                            </optgroup>

                            <optgroup label="Some Numbers">

                                <option id="op6" value="6">6</option>
                                <option id="opt7" value="7">7</option>
                            </optgroup>

                        </select>
                        <input id="inp7" type="submit">

                    </form>
                </div>

            </div>`


}


export default noteData




