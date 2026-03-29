import java.util.*;

/**
 * Unit tests for Java Collections Framework.
 * Demonstrates basic operations on List, Set, and Map.
 */
public class CollectionsTest {
    
    public static void main(String[] args) {
        testArrayList();
        testHashSet();
        testHashMap();
        System.out.println("All Collections tests passed!");
    }

    public static void testArrayList() {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Spring");
        
        assert list.size() == 2 : "List size should be 2";
        assert list.contains("Java") : "List should contain 'Java'";
        
        list.remove("Java");
        assert list.size() == 1 : "List size should be 1 after removal";
        System.out.println("testArrayList: PASSED");
    }

    public static void testHashSet() {
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(1); // Duplicate
        
        assert set.size() == 1 : "Set should not contain duplicates";
        assert set.contains(1) : "Set should contain 1";
        System.out.println("testHashSet: PASSED");
    }

    public static void testHashMap() {
        Map<String, Integer> map = new HashMap<>();
        map.put("One", 1);
        map.put("Two", 2);
        
        assert map.get("One") == 1 : "Map should return 1 for key 'One'";
        assert map.containsKey("Two") : "Map should contain key 'Two'";
        assert map.size() == 2 : "Map size should be 2";
        System.out.println("testHashMap: PASSED");
    }
}
